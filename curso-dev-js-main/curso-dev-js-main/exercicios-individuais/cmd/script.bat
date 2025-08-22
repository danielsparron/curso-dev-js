cd Desktop
mkdir projeto_responsivo
cd projeto_responsivo
md public src docs
cd public
md html css js media
cd media
dir
cd ..
cd html
echo Projeto Responsivo > home.html
cd ..
cd css
echo body { margin: 0; padding: 0; background-color: lightgray; } > theme.css
cd ..
cd media
md imagens fontes
cd ..
cd css
copy theme.css ..\.. docs
copy theme.css ..\..
cd ..\..
move theme.css docs
cd public
cd js
echo console.log("Site responsivo pronto!"); > responsivo.js
echo console.log("Utilitarios carregados!"); > utils.js
rename utils.js helpers.js
cd ..
dir /s
cd ..
cd docs
del theme.css
cd ..
cd public
cd html
notepad home.html