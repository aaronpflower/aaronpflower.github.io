# TODO figure out what needs to be done
git checkout -b building

rm -f ./docs

npm run build

rm -f ./src

mv ./docs ./

git add .

git commit -m "new build"

git checkout master

git merge building

git branch -d building

git push origin master

git checkout development
