# Build Troubleshooting

## PowerShell “EPERM spawn” or script policy errors

If `npm run build` fails in PowerShell with EPERM or script policy errors:

1. Temporary fix for the current session:
```powershell
Set-ExecutionPolicy -Scope Process Bypass -Force
```

2. Run build with explicit bypass:
```powershell
powershell -ExecutionPolicy Bypass -Command "npm run build"
```

3. Alternative: use `cmd.exe` instead of PowerShell:
```powershell
cmd /c "npm run build"
```

If builds continue to fail locally, deploy via Vercel and verify the build there.
