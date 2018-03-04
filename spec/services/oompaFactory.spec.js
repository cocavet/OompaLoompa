const expect = require('chai').expect;
const EmployeeOompa = require('../../src/models/employeeOompa');
const OompaFactory = require('../../src/services/oompaFactory');

describe('Oompa Loompas Factory', () => {
    let factory;
    beforeEach(() => {
        factory = new OompaFactory();
    });

    it('Should transform Oompla employee in a EmployeeOompa object', () => {
        const data = {
            id: 1,
            first_name: 'pau',
            last_name: 'obrador',
            gender: 'M',
            image: '1.jpg',
            profession: 'Frontend developer',
            email: 'pau.obpi@gmail.com',
            age: 32,
            country: 'Spain',
            height: 78,
            oompaType: 'employee',
            color: 'blue',
            food: 'red onions',
            random_string: 'This is a random string',
            song: 'bla bla bla'
        };

        const oompa = factory.create(data);
        expect(oompa).to.be.instanceOf(EmployeeOompa);
        expect(oompa.id).equals(1);
        expect(oompa.profession).equals('Frontend developer');
        expect(oompa.first_name).equals('pau');
        expect(oompa.gender).equals('M');
    });

    it('Should throw an error when typeOompa does not exist', () => {
      const data = {
        id: 1,
        first_name: 'pau',
        last_name: 'obrador',
        gender: 'M',
        image: '1.jpg',
        profession: 'Frontend developer',
        email: 'pau.obpi@gmail.com',
        age: 32,
        country: 'Spain',
        height: 78,
        oompaType: 'king',
        color: 'blue',
        food: 'red onions',
        random_string: 'This is a random string',
        song: 'bla bla bla'
    };

        expect(() => factory.create(data)).to.throw(Error).with.property('message', 'Invalid Oompa type :(');
    });

    it('Should throw an error when oompa Loompa is undefined', () => {
        expect(() => factory.create()).to.throw(Error).with.property('message', 'Ups, no Oompa loompas');
    });
});