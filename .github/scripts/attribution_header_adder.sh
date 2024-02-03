REPONAME=$1
HEADER="## ATTRIBUTIONS"
echo $HEADER >> CONTENT.md
CONTENT="This file lists the third-party libraries, frameworks, and other components used in the $REPONAME repository,<br />along with their respective licenses. <br />It is important to comply with the licensing terms of these components when using the code. <br />"
echo $CONTENT >> CONTENT.md

cat ATTRIBUTIONS.md >> CONTENT.md 
mv CONTENT.md ATTRIBUTIONS.md 