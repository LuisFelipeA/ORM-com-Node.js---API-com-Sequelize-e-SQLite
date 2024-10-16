const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  // Create
  async criaRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  //Read
  async pegaTodosOsRegistros () {
    return dataSource[this.model].findAll();
  }

  async pegaRegistroPorEscopo (escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return dataSource[this.model].findOne({where: { ...where}});
  }

  //Update
  async atualizaRegistro(dadosAtualizados, where) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: { ...where }
    });
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
  
  //Delete
  async excluiRegistro(where) {
    return dataSource[this.model].destroy({ where: { ...where } });
  }
}

module.exports = Services;