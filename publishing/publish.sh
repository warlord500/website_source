tar -zcvf 404.tgz public_html
# as security concern dont write the password here because it would be on git hub than anyone can access it.
scp 404.tgz jadonbel@jadonbelezos.com:/home/jadonbel/
ssh jadonbel@jadonbelezos.com "./deploy.sh"