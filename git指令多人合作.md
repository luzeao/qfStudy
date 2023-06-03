

# 一. 到公司之后,公司已经有项目,并且有自己的远程仓库
## 1. git clone xxxxxxxxx
## 2. 进行开发
  - 开发完毕之后 git add .  => 添加到本地仓库
  - git commit -m '提交'
  - git pull => 拉取同事的最新的代码
  - git push => 把自己编写的代码和同事的一起push到远程


# 二. 开发全新项目(并且由你自己搭建)
## 方案1
### 1. 创建远程仓库
### 2. git clone xxxx
  - 在clone下来的文件夹中开始搭建整个项目
  - git add .
  - git commit -m '提交'
  - git push

## 方案2
### 1. 创建一个本地仓库,和本地项目
### 2. git romote add origin xxxxxxx 
### 3. git branch --set-upstream-to=origin/master => master是远程仓库名
### 4. git fetch => 从远程仓库获取最新的代码
### 5. git merge --allow-unrelated-histories => 合并
### 6. git push