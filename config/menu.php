<?php
/* AdminBuildr Menu is config here as it's fixed */
return array(
    array(
        'name' => '系统生成',   // Menu Group Name
        'active' => false,
        'sub_menus' => array(
            array('name' => '创建模块', 'url' => 'abModule'),
            array('name' => '创建报表', 'url' => 'abReport'),
            array('name' => '创建表单', 'url' => 'abForms/create'),
            array('name' => '常量定义管理', 'url' => 'abEnum/index'),
            array('name' => '文件上传管理', 'url' => 'abFile/manage')
        )
    ),
    array(
        'name' => '访问权限',
        'active' => false,
        'sub_menus' => array(
            array('name' => '编辑权限', 'url' => 'kxAdminRole/index'),
            array('name' => '节点管理', 'url' => 'kxAdminNode/index'),
        )
    )
);