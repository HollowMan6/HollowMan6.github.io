# Texter

Texter是一个使用CNN来识别简单数学符号并且生成其LATEX代码的简单工具。此CNN使用HASY数据集，能够识别大约269个数学符号。它能够达到前五个结果中错误率为2%。精确度可以被更多地提高，但是我希望能够使模型变得轻便，右边的表格将会显示可能性为前5的预测结果。

本程序借鉴了这里的[HASY数据集](https://github.com/MartinThoma/HASY).

## 运行方式

本程序为一个Web网站页面，通过浏览器实现访问，所以首先你需要XAMPP，[教程参考](https://jingyan.baidu.com/article/e73e26c093db4b24acb6a76a.html)
然后将本仓库放置在xampp的htdocs文件夹下面，如:C:\xampp\htdocs\texter，并在浏览器中输入地址http://localhost/texter/ 。就可以开始测试了。

因为已经引入了[这里](https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.10.0) tensorflow.js脚本，所以无需额外的环境依赖。

Texter is a simple tool that uses CNN to identify simple mathematical symbols and generate their latex code. This CNN can recognize about 269 mathematical symbols by using the Hassy data set. It can achieve the error rate of 2% in the first five results. The accuracy can be improved more, but I hope to make the model lighter. The table on the right will show the prediction results with the possibility of the top 5.

This program uses the [Hassy data set](https://github.com/martinthoma/hassy)for reference.

## Operation way

This program is a web site page, accessed through a browser, so first you need xampp. For the tutorial, please refer [here](https://jingyan.baidu.com/article/e73e26c093db4b24acb6a76a.html)

Then place the warehouse under the HtDocs folder of xampp, such as C:\xampp\htdocs\texter , and enter the address http://localhost/texter/ in the browser. You can start the test.

Because the tensorflow.js script has been introduced [here](https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.10.0), no additional environment dependency is required.