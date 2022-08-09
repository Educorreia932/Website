# Resize images so they are 300 pixel wide
resize:
	@mogrify -geometry 300x -define colorspace:auto-grayscale=false -path . *.png

deploy:
	@ssh root@educorreia932.dev 'screen -R website && yarn preview'

# Syncs files with server
sync:
	@cd $(dirname ${BASH_SOURCE[0]})
	@rsync -rav --include-from='include.txt' "${PWD}/" root@educorreia932.dev:/var/www/website

