const organization_template = {
  title: 'Modelo de organização',
  subtitle:
    'Em aplicações SaaS multi-inquilino, é comum várias organizações partilharem políticas de controlo de acesso idênticas, incluindo permissões e papéis. No Logto, este conceito é denominado "modelo de organização". A sua utilização simplifica o processo de construção e desenho do seu modelo de autorização.',
  roles: {
    tab_name: 'Papéis da org',
    search_placeholder: 'Procurar por nome do papel',
    create_title: 'Criar papel da org',
    role_column: 'Papel da org',
    permissions_column: 'Permissões',
    placeholder_title: 'Papel da organização',
    placeholder_description:
      'O papel da organização é um agrupamento de permissões que podem ser atribuídas a utilizadores. As permissões devem provir das permissões organizacionais predefinidas.',
  },
  permissions: {
    tab_name: 'Permissões da org',
    search_placeholder: 'Procurar por nome da permissão',
    create_org_permission: 'Criar permissão da org',
    permission_column: 'Permissão',
    description_column: 'Descrição',
    placeholder_title: 'Permissão da organização',
    placeholder_description:
      'A permissão da organização refere-se à autorização para aceder a um recurso no contexto da organização.',
    delete_confirm:
      'Se esta permissão for apagada, todos os papéis da organização que incluam esta permissão perderão a mesma, e utilizadores que tinham esta permissão perderão o acesso concedido por ela.',
    create_title: 'Criar permissão de organização',
    edit_title: 'Editar permissão de organização',
    permission_field_name: 'Nome da permissão',
    description_field_name: 'Descrição',
    description_field_placeholder: 'Ler histórico de compromissos',
    create_permission: 'Criar permissão',
    created: 'A permissão de organização {{name}} foi criada com sucesso.',
  },
};

export default Object.freeze(organization_template);
