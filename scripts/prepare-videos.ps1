$ErrorActionPreference = "Continue"

$root = Split-Path -Parent $PSScriptRoot
$videosParent = Split-Path -Parent $root
$srcDir = Join-Path $videosParent "portfolio-editor\videos"
$postersDir = Join-Path $root "public\posters"
$outDir = Join-Path $root "scripts\output"

New-Item -ItemType Directory -Force -Path $postersDir, $outDir | Out-Null

$files = Get-ChildItem -LiteralPath $srcDir -Filter "*.mp4" | Sort-Object Name
$manifest = @()

foreach ($f in $files) {
  $base = [System.IO.Path]::GetFileNameWithoutExtension($f.Name)
  $poster = Join-Path $postersDir "$base.jpg"
  $out = Join-Path $outDir "$base.mp4"

  Write-Host "== P$($f.Name) =="

  ffmpeg -y -loglevel error -ss 1 -i $f.FullName -frames:v 1 -q:v 3 $poster

  ffmpeg -y -loglevel error -i $f.FullName -vf "scale='min(1280,iw)':-2" -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart $out

  if (Test-Path -LiteralPath $out -and (Test-Path -LiteralPath $poster)) {
    $m = [PSCustomObject]@{
      id     = $base
      source = $f.FullName
      poster = "public/posters/$base.jpg"
      video  = "scripts/output/$base.mp4"
    }
    $manifest += $m
    Write-Host "  OK  -> $out"
  } else {
    Write-Host "  FAILED  -> $($f.Name)"
  }
}

$manifest | ConvertTo-Json -Depth 3 | Set-Content -LiteralPath (Join-Path $outDir "manifest.json") -Encoding UTF8
Write-Host "DONE. Processed: $($manifest.Count) files"