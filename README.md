imooc
=======
���� node+mongodb 100���ӽ�վ���ԣ�һ�ڣ�Դ��  

����ʽ��  
����Ŀ��Ŀ¼�У�ִ�������У�

    bower install
    npm install


1. ��Ҫ����
2. ��Ŀ������ʼ��
3. ����ļ�����
4. ������ͼ
5. ����ǰ������
6. ��ʽ������α��ģ������
7. ������ݿ�ģ��
8. ��������߼�
9. ���������ļ�����վ��������


express: Express ��һ����ࡢ���� node.js Web Ӧ�ÿ������, ���ṩһϵ��ǿ������ԣ������㴴������ Web ���ƶ��豸Ӧ�á�  
mongoose: mongoDB ���ӹ���  
jade: Template Engine  
moment.js: Javascript���ڴ������  


��װexpress ���

    npm install express jade moment mongoose
��������쳣��������װ��

    npm install express
    npm install jade 
    npm install mongoose
    npm install bower -g 
    npm install underscore
    npm install body-parser
    bower install bootstrap
ע�⣺bower ��Ҫʹ���õ�git



http://www.cnblogs.com/linjiqin/p/3192159.html  
Windows7�°�װMongoDB

��mongodb ��װ��windows ����  

    mongod.exe --install --logpath=D:\software\MongoDB2.6\log\log.txt --dbpath=D:\software\MongoDB2.6\data\db

    net start mongodb    // ����mongodb����
    net stop mongodb	// ����mongodb����


mogondb �����У�

    mongo
    use imooc
    db.movies.find({})
    db.movies.find({}).count()
    db.movies.remove()


mongon ����ģ�ͣ�  

+ Schema ģʽ  
+ Model ģ��  
+ Document �ĵ�  




���ɰ�װ�����ļ���

    bower init	// ����ǰ�������ļ�
    npm init	// ���ɺ�����������ļ�




���������У������ʼ��������

    var express = require('express');
    var port = process.env.PORT || 3000;            // ���������д���Ĳ���
    
    
    // ��ӡ�������д�������в���
    process.argv.forEach(function (val, index, array) {
      console.log(index + ': ' + val);
    });
    
    // ���ص�ǰϵͳ�Ļ���������Ϣ
    console.log(JSON.stringify(process.env));
    
    // ��window ��ʹ��:
    set PORT=4000
    node app.js
    
    npm install -g supervisor    // -g ��װ��ȫ��ģʽ
    supervisor app.js  // �޸Ĵ���֮�󣬲�������node ������ 
