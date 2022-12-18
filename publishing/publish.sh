if [$(basename $(pwd)) = "publishing"]
then
	cd ..
fi
git add .
git commit 
git push
#makes getting the password easier
/c/Program\ files\ \(x86\)/KeePass\ Password\ safe/KeePass.exe &
Hugo --cleanDestinationDir --destination "public_html/" --minify
rm -R ./public_html/*.ts # cut down on archive space
rsync ./public_html/ jadonbel@jadonbelezos.com:/home/jadonbel/domains/jadonbelezos.com/public_html
# as security concern dont write the password here because it would be on git hub than anyone can access it.
ssh jadonbel@jadonbelezos.com "./deploy.sh"
#HASH= $(ipfs.sh add -qr --only-hash /d/website_source/public_html/ | tail -n 1)
#ipfs.sh name publish $HASH

#echo "publishing to pinata";
#read $LOGINKEY
#ipfs.sh pin remote add $HASH  $LOGINKEY

#paging api for facebook 
# look up https://developers.facebook.com/docs/graph-api/overview#paging
# our goal is to create a new facebook post with the webpage title 
# for every publish
