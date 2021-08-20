cd $(dirname ${BASH_SOURCE[0]})
rsync -av --exclude-from="exclude.txt" "${PWD}/" root@educorreia932.dev:/var/www/website