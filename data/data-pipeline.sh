cp members-of-parliament/members-of-parliament.json target/temp.json
groovy disclosure-of-member-expenses/src/update-member-disclosure.groovy members-of-parliament/members-of-parliament.json disclosure-of-member-expenses/data/format-new/ target/temp.json new >target/output.log 
groovy disclosure-of-member-expenses/src/update-member-disclosure.groovy target/temp.json disclosure-of-member-expenses/data/format-old/ target/temp.json old >target/output.log
mv target/temp.json target/output.json
echo finished
