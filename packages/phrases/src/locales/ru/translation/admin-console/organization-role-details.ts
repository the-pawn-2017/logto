const organization_role_details = {
  page_title: 'Детали роли организации',
  back_to_org_roles: 'Вернуться к ролям организации',
  org_role: 'Роль организации',
  delete_confirm:
    'При этом будут удалены разрешения, связанные с этой ролью, у затронутых пользователей, и будут удалены связи между ролями организации, членами организации и правами организации.',
  deleted: 'Роль организации {{name}} успешно удалена.',
  permissions: {
    tab: 'Разрешения',
    name_column: 'Разрешение',
    description_column: 'Описание',
    type_column: 'Тип разрешения',
    type: {
      api: 'Разрешение API',
      org: 'Разрешение организации',
    },
    assign_permissions: 'Назначить разрешения',
  },
  general: {
    tab: 'Общее',
    settings: 'Настройки',
    description:
      'Роль организации - это группировка разрешений, которые можно назначить пользователям. Разрешения должны быть взяты из предопределенных разрешений организации.',
    name_field: 'Имя',
    description_field: 'Описание',
    description_field_placeholder: 'Пользователи с правами только на просмотр',
  },
};

export default Object.freeze(organization_role_details);
