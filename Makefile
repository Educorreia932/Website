all: build sync deploy

deploy:
	@ssh root@educorreia932.dev 'cd $$HOME/website && yarn start &'

sync:
	@cd $(dirname ${BASH_SOURCE[0]})
	@rsync -arv --exclude=".git" --exclude="node_modules" "${PWD}/" root@educorreia932.dev:/var/www/website

build: 
	@yarn build
