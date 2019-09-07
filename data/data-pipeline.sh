python financial/process.py members-of-parliament/members-of-parliament.json financial/ target/temp.json
groovy disclosure-of-member-expenses/src/update-member-disclosure.groovy target/temp.json disclosure-of-member-expenses/data/format-new/ target/temp.json new >target/output.log 
groovy disclosure-of-member-expenses/src/update-member-disclosure.groovy target/temp.json disclosure-of-member-expenses/data/format-old/ target/temp.json old >target/output.log
groovy candidate-donations-expenses/src/add-candidate-donations-expenses.groovy target/temp.json candidate-donations-expenses/data/2017-nz-general-election-candidates-returns_donations-and-expenses.json target/temp.json >target/output.log
mv target/temp.json target/output.json
echo finished
