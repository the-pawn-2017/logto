const user_details = {
  back_to_users: 'Volver a la gestión de usuarios',
  created_title: 'Se ha creado el usuario con éxito',
  created_guide: 'Puede enviar al usuario la siguiente información de inicio de sesión',
  created_username: 'Nombre de usuario:',
  created_password: 'Contraseña:',
  menu_delete: 'Eliminar',
  delete_description: 'Esta acción no se puede deshacer. Eliminará permanentemente al usuario.',
  deleted: 'Se ha eliminado al usuario con éxito',
  reset_password: {
    reset_password: 'Restablecer contraseña',
    title: '¿Está seguro de que desea restablecer la contraseña?',
    content:
      'Esta acción no se puede deshacer. Esto restablecerá la información de inicio de sesión del usuario.',
    congratulations: 'Se ha restablecido la información de inicio de sesión del usuario',
    new_password: 'Nueva contraseña:',
  },
  tab_settings: 'Configuración',
  tab_roles: 'Roles',
  tab_logs: 'Registros de usuario',
  settings: 'Configuración',
  settings_description:
    'Cada usuario tiene un perfil que contiene toda la información del usuario. Consta de datos básicos, identidades sociales y datos personalizados.',
  field_email: 'Correo electrónico principal',
  field_phone: 'Teléfono principal',
  field_username: 'Nombre de usuario',
  field_name: 'Nombre',
  field_avatar: 'URL de imagen de avatar',
  field_avatar_placeholder: 'https://tu.dominio.cdn/avatar.png',
  field_custom_data: 'Datos personalizados',
  field_custom_data_tip:
    'Información adicional del usuario no incluida en las propiedades de usuario predefinidas, como el color y el idioma preferidos del usuario.',
  field_connectors: 'Conexiones sociales',
  custom_data_invalid: 'Los datos personalizados deben ser un objeto JSON válido',
  connectors: {
    connectors: 'Conectores',
    user_id: 'ID de usuario',
    remove: 'Eliminar',
    not_connected: 'El usuario no está conectado a ningún conector social',
    deletion_confirmation:
      'Está eliminando la identidad de <name/> existente. ¿Está seguro de que desea hacer esto?',
  },
  suspended: 'Suspendido',
  roles: {
    name_column: 'Rol',
    description_column: 'Descripción',
    assign_button: 'Asignar roles',
    delete_description:
      'Esta acción eliminará este rol de este usuario. El rol en sí seguirá existiendo, pero ya no estará asociado con este usuario.',
    deleted: 'Se eliminó "{{name}}" correctamente de este usuario.',
    assign_title: 'Asigne roles a {{name}}',
    assign_subtitle: 'Autorice {{name}} uno o más roles',
    assign_role_field: 'Asignar roles',
    role_search_placeholder: 'Buscar por nombre de rol',
    added_text: '{{value, number}} agregados',
    assigned_user_count: '{{value, number}} usuarios',
    confirm_assign: 'Asignar roles',
    role_assigned: 'Rol(es) asignado(s) con éxito',
    search: 'Buscar por nombre de rol, descripción o ID',
    empty: 'No hay roles disponibles',
  },
};

export default user_details;
