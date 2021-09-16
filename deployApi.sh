# Entramos a la carpeta de la API
printf '1-Accedo a la carpeta API\n' && cd api && 

# Instalamos alguna dependencia si es que se necesita
printf '2-Instalo dependencias\n' && npm ci && 

# Transpilamos el proyecto
printf '3-Transpilo el proyecto\n' && npm run ts && 

# Eliminamos la anterior instancia de PM2
printf '4-Elimino la anterior instancia de PM2\n' && pm2 delete 0 && 

# Starteamos la nueva version de la api en PM2
printf '5-Starteo la nueva version de la api en PM2\n' && pm2 start ./dist/server.js 
