git add .
git commit 
git push
git push personal
#makes getting the password easier
/c/Program\ files\ \(x86\)/KeePass\ Password\ safe/KeePass.exe &
Hugo --cleanDestinationDir --destination "public_html/" --minify
rm -R ./public_html/*.ts # cut down on archive space
tar -zcvf 404.tgz public_html
# as security concern dont write the password here because it would be on git hub than anyone can access it.
scp 404.tgz jadonbel@jadonbelezos.com:/home/jadonbel/
ssh jadonbel@jadonbelezos.com "./deploy.sh"

#paging api for facebook 
# look up https://developers.facebook.com/docs/graph-api/overview#paging
# our goal is to create a new facebook post with the webpage title 
# for every publish
