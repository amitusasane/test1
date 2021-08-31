import transformTheLocObj from '../jsAssignment';

const testObj = {
  data: {
    dashboard: {
      type: 'CHEC2',
      dataCode: '35M-007',
      subType: 'M2',
      dashboardType: 'Wing',
      isSAndGEditable: true,
      components: [
        {
          panelNumber: '22-58883-000',
          panelDescription: 'PNL-INR TRIMPLTKAHLUA SPRKL',
          location: 'AGAAA',
          parentPanelNumber: '734-C02202',
          modelCode: 'H',
          whitelist: ['AGAAA'],
          blacklist: [],
          type: 'hardwired-component',
          switchId: '',
          bom: '734-C02202',
          isAsBuilt: true,
        }
      ]
    }
  }
}

const expectedObj = {
    AG:{
        AGAAA:{
          panelNumber: '22-58883-000',
          panelDescription: 'PNL-INR TRIMPLTKAHLUA SPRKL',
          location: 'AGAAA',
          parentPanelNumber: '734-C02202',
          modelCode: 'H',
          whitelist: ['AGAAA'],
          blacklist: [],
          type: 'hardwired-component',
          switchId: '',
          bom: '734-C02202',
          isAsBuilt: true,

        }
    }
}

test("Test transformTheLocObj", () => {
    expect(transformTheLocObj(testObj.data)).toMatchObject(expectedObj);
});
