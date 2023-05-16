var funTurBuscar = function(){
    var formBuscar = Ext.getCmp('formas.turistas.buscar').getForm(),
        gridBuscar = Ext.getCmp('grids.turistas.buscar'),
        store = gridBuscar.getStore();

    Ext.apply(store.getProxy().extraParams, formBuscar.getValues());
    store.loadPage(1);
}

var funTurLimpiar = function(){
    var formBuscar = Ext.getCmp('formas.turistas.buscar').getForm();

    formBuscar.reset();
    
    funTurBuscar();
}

var funTurVenAgregar = function(){
    var venAgregar = Ext.getCmp('windows.turistas.agregar'),
        formAgregar = venAgregar.down('form').getForm();

    formAgregar.reset();
    venAgregar.show();
}

var funTurVenEditar = function(){
    var venEditar = Ext.getCmp('windows.turistas.agregar'),
        formEditar = venEditar.down('form').getForm(),
        gridBuscar = Ext.getCmp('grids.turistas.buscar'),
        seleccion = gridBuscar.getSelectionModel().selected.length;

    if( seleccion == 0 ) {
        Ext.Msg.alert('Alerta', 'Seleccione un registro', Ext.emptyFn)
        return false;
    }

    if( seleccion > 1 ) {
        Ext.Msg.alert('Alerta', 'Seleccione solo un registro', Ext.emptyFn)
        return false;
    }

    seleccion = gridBuscar.getSelectionModel().getSelection()[0];

    formEditar.reset();
    formEditar.loadRecord(seleccion);

    venEditar.show();
}

var funTurGuardar = function(){
    var venGuardar = Ext.getCmp('windows.turistas.agregar'),
        formGuardar = venGuardar.down('form').getForm(),
        gridBuscar = Ext.getCmp('grids.turistas.buscar');

    if( formGuardar.isValid() ){

        var turActual = formGuardar.getValues();
        var turNuevo = false;


        if( turActual.id == 0 || turActual.id == ''){
            var turIdFinal = 0;

            if(gridBuscar.getStore().getCount() > 0){
                turIdFinal = gridBuscar.getStore().getAt(0).get('id');

                gridBuscar.getStore().each(function(rec){
                    turIdFinal = Math.max(turIdFinal, rec.get('id'))
                })

                turActual.id = turIdFinal + 1;
                turNuevo = true;
            }
        }

        if( turNuevo ) {
            gridBuscar.getStore().add(turActual);
        } else {
            var turAnterior = gridBuscar.getStore().findRecord('id', turActual.id);
            turAnterior.set(turActual);
        }

        venGuardar.hide();
    }
}

var funTurEliminar = function(){
    var gridBuscar = Ext.getCmp('grids.turistas.buscar'),
    seleccion = gridBuscar.getSelectionModel().selected.length;

    if( seleccion == 0 ){
        Ext.Msg.alert('Alerta', 'Seleccione un registro', Ext.emptyFn)
        return false;
    }

    seleccion = gridBuscar.getSelectionModel().getSelection()

    Ext.Msg.confirm('Confirmacion', 'Are you sure?', function(btn){
        if( btn == 'yes' ){
            Ext.each(seleccion, function(name, index){
                var index = gridBuscar.getStore().find('id', name.data.id);

                gridBuscar.getStore().removeAt(index);
            })
        }
    })
}





var funTurGuardar2 = function(){
    var venGuardar = Ext.getCmp('windows.turistas.agregar'),
        formGuardar = venGuardar.down('form').getForm(),
        gridBuscar = Ext.getCmp('grids.turistas.buscar');

    if( formGuardar.isValid() ){

        formGuardar.submit({
            url: urlTuristas,
            method: 'POST'
        })
    }
}