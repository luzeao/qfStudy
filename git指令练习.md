
# git init 新建初始化一个 本地仓库 

# git remote add origin xxx  添加远程主机地址
# git remote -v  查看远程仓库地址以及name
# git remote remove xxx仓库名字  删除远程主机地址


# git log  查看git日志 => 查看完之后按q退出log
# git status 查看GIT 文件提交的状态 


# git clone xxxx=>克隆地址  克隆仓库到本地 
# git pull origin xxx => 拉取的远程分支名  拉取到本地仓库
# git add ./   添加代码到本地暂存区
# git commit -m "ds"  提交代码到本地仓库
# git push origin  xxx=>分支名  推送到远程仓库


# git checkout 切换分支
# git branch 创建查看分支
# git merge xxx 合并分支  => 切换到想要合并的分支 => xxx是被合并的分支
## git merge master  (test)   把master 分支的代码合并到 test分支
# git push origin dev:dev  将本地的dev推送到远程的dev
# git push origin master:test   本地的master 推送到远程的 test 分支