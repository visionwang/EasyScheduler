/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import i18n from '@/module/i18n'
let menu = {
  projects: [
    {
      name: `${i18n.$t('项目首页')}`,
      id: 1,
      path: 'projects-index',
      isOpen: true,
      icon: 'fa-home',
      children: []
    },
    {
      name: `${i18n.$t('工作流')}`,
      id: 2,
      path: '',
      isOpen: true,
      icon: 'fa-gear',
      children: [
        {
          name: `${i18n.$t('工作流定义')}`,
          path: 'definition',
          id: 1
        },
        {
          name: `${i18n.$t('工作流实例')}`,
          path: 'instance',
          id: 2
        },
        {
          name: `${i18n.$t('任务实例')}`,
          path: 'task-instance-list',
          id: 3
        }
        // {
        //   name: `${i18n.$t('任务记录')}`,
        //   path: 'task-record-list',
        //   id: 4
        // }
      ]
    }
  ],

  security: [
    {
      name: `${i18n.$t('租户管理')}`,
      id: 1,
      path: 'tenement-manage',
      isOpen: true,
      icon: 'fa-users',
      children: []
    },
    {
      name: `${i18n.$t('用户管理')}`,
      id: 1,
      path: 'users-manage',
      isOpen: true,
      icon: 'fa-user-circle',
      children: []
    },
    {
      name: `${i18n.$t('告警组管理')}`,
      id: 1,
      path: 'warning-groups-manage',
      isOpen: true,
      icon: 'fa-warning',
      children: []
    },
    {
      name: `${i18n.$t('服务管理')}`,
      id: 1,
      path: '',
      isOpen: true,
      icon: 'fa-server',
      children: [
        {
          name: 'master',
          path: 'servers-master',
          id: 1
        },
        {
          name: 'worker',
          path: 'servers-worker',
          id: 2
        }
      ]
    }
  ],
  resource: [
    {
      name: `${i18n.$t('文件管理')}`,
      id: 1,
      path: 'file',
      isOpen: true,
      icon: 'fa-files-o',
      children: [],
      disabled: false
    },
    {
      name: `${i18n.$t('UDF管理')}`,
      id: 1,
      path: '',
      isOpen: true,
      icon: 'fa-file-text',
      disabled: false,
      children: [
        {
          name: `${i18n.$t('资源管理')}`,
          path: 'resource-udf-resource',
          id: 1
        },
        {
          name: `${i18n.$t('函数管理')}`,
          path: 'resource-udf-function',
          id: 2
        }
      ]
    }
  ],
  user: [
    {
      name: `${i18n.$t('用户信息')}`,
      id: 1,
      path: 'account',
      isOpen: true,
      icon: 'fa-user',
      children: [],
      disabled: false
    },
    {
      name: `${i18n.$t('修改密码')}`,
      id: 1,
      path: 'password',
      isOpen: true,
      icon: 'fa-key',
      children: [],
      disabled: false
    }
  ]
}

export default type => menu[type]
