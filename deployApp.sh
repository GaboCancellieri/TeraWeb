# Entramos a la carpeta de la APP
printf '1-Accedo a la carpeta CLIENT\n' && cd client && 

# Buildeamos Angular
printf '2-Buildeo Angular\n' && ng build --prod --build-optimizer &&

# Eliminamos la version anterior
printf '3-Elimino la version anterior\n' && rm -r ../../var/www/html/* && 

# Copiamos el build nuevo a la carpeta de apache
printf '4-Copio el build nuevo a la carpeta apache\n' && cp -r ./dist/client/* ../../../var/www/html && 

# Restarteamos apache para que nos tome los cambios
printf '5-Stopeo apache\n' && sudo systemctl stop httpd && 
printf '6-Starteo apache\n' && sudo systemctl start httpd 