cp members-of-parliament/members-of-parliament.json target/temp.json
groovy disclosure-of-member-expenses/src/update-member-disclosure.groovy members-of-parliament/members-of-parliament.json disclosure-of-member-expenses/data/format-new/ target/temp.json new 
groovy disclosure-of-member-expenses/src/update-member-disclosure.groovy target/temp.json disclosure-of-member-expenses/data/format-old/ target/temp.json old 
groovy candidate-donations-expenses/src/add-candidate-donations-expenses.groovy target/temp.json candidate-donations-expenses/data/2017-nz-general-election-candidates-returns_donations-and-expenses.json target/temp.json >target/output.log
mv target/temp.json target/output.json
echo finished
