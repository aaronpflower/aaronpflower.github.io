# TODO figure out what needs to be done
git checkout development

git push origin development

git checkout -b building

rm -rf ./docs

npm run build

rm -rf ./src

mv ./docs ./

rm -rf ./docs

git add .

git commit -m "new build"

git checkout master

git merge building

git branch -d building

git push origin master

git checkout development
