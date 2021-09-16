# nos aseguramos de pararnos en la rama MAIN
git checkout master && 

# Bajamos los cambios
git pull &&

# DEPLOY API
sh deployApi.sh &&

# DEPLOY APP
sh deployApp.sh
