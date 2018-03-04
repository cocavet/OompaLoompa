const EmployeeOompa = require('../models/employeeOompa');

const OOMPA_EMPLOYEE = 'employee';

module.exports = class OompaFactory {
  create (oompa) {
    if (!oompa) {
      throw new Error('Ups, no Oompa loompas');
    }

    switch (oompa.oompaType) {
      case OOMPA_EMPLOYEE:
        return new EmployeeOompa(oompa);
    }

    throw new Error('Invalid Oompa type :(');
  }
};
