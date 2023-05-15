const DATA_STORE_NAME = 'tourist_list';

var getLocalStorageArray = function(name){
        
    return localStorage.getItem(name)? JSON.parse(localStorage.getItem(name)) : [];

}

var setLocalStorageArray = function(name, array){
        
    localStorage.setItem(name, JSON.stringify(array));

}



var funAbcBuscar = function(){
    var formBuscar = Ext.getCmp('formas.abc.buscar').getForm(),
        gridBuscar = Ext.getCmp('grids.abc.buscar'),
        store = gridBuscar.getStore();

    touristArray = getLocalStorageArray(DATA_STORE_NAME);

    var tourist = formBuscar.getValues();
    var campo;
    (tourist.id == "")? campo = 'tourist_name' : campo = 'id';

    var value;
    (tourist.id == "")? value = tourist.tourist_name : value = tourist.id;
    
    store.clearFilter();

    store.filter({
        property: campo,
        value: value
    })

    formBuscar.reset();
    store.loadPage(1);
}


var funAbcLimpiar = function(){
    var formBuscar = Ext.getCmp('formas.abc.buscar').getForm();

    formBuscar.reset();
    
    funAbcBuscar();
}


var funAbcVenAgregar = function(){
    var venAgregar = Ext.getCmp('windows.abc.agregar'),
        formAgregar = venAgregar.down('form').getForm();

    formAgregar.reset();
    venAgregar.show();
}


var funAbcVenEditar = function(){
    var venEditar = Ext.getCmp('windows.abc.agregar'),
        formEditar = venEditar.down('form').getForm(),
        gridBuscar = Ext.getCmp('grids.abc.buscar'),
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


var funAbcGuardar = function(){

    var venGuardar = Ext.getCmp('windows.abc.agregar'),
        formGuardar = venGuardar.down('form').getForm(),
        gridBuscar = Ext.getCmp('grids.abc.buscar');


    if( formGuardar.isValid() ){
        var touristArray = getLocalStorageArray(DATA_STORE_NAME);
        var turNuevo = false;  

        var turActual =  formGuardar.getValues();

        
        if( turActual.id == 0 || turActual.id == ''){
            var turIdFinal = 0;

            if(gridBuscar.getStore().getCount() > 0){
                turIdFinal = gridBuscar.getStore().getAt(0).get('id');

                gridBuscar.getStore().each(function(rec){
                    turIdFinal = Math.max(turIdFinal, rec.get('id'))
                })

                turActual.id = turIdFinal + 1;
                turNuevo = true;
            } else if( touristArray.length == 0 ) {
                turActual.id = turIdFinal + 1;
                turNuevo = true;
            }
        }

        if( turNuevo ) {

            touristArray.push(turActual)
            setLocalStorageArray(DATA_STORE_NAME, touristArray);
            gridBuscar.getStore().add(turActual);         

        } else {

            var turAnterior = gridBuscar.getStore().findRecord('id', turActual.id);
            if(turAnterior){
                touristArray = getLocalStorageArray(DATA_STORE_NAME);
                touristArray[turActual.id] = turActual;

                setLocalStorageArray(DATA_STORE_NAME, touristArray)
                turAnterior.set(turActual);

            }

        }

        venGuardar.hide();
    }
}

var funAbcVenCargar = function(){
    var venCargar = Ext.getCmp('windows.abc.cargar'),
        formCargar = venCargar.down('form').getForm(),
        gridBuscar = Ext.getCmp('grids.abc.buscar'),
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

    formCargar.reset();
    formCargar.loadRecord(seleccion);
    venCargar.show();
}

var funAbcCargar = function() {
    var venCargar = Ext.getCmp('windows.abc.cargar'),
        formCargar = Ext.getCmp('formas.abc.cargar').getForm(),
        gridBuscar = Ext.getCmp('grids.abc.buscar'),
        seleccion = gridBuscar.getSelectionModel().selected.length;


    if( formCargar.isValid() ){
        var tourist_file = Ext.getCmp('touristfile').getValue();

        seleccion = gridBuscar.getSelectionModel().getSelection()[0];

        //updating storage
        touristArray = getLocalStorageArray(DATA_STORE_NAME);

        upd_obj = touristArray.findIndex((obj => obj.id == seleccion.id));
        touristArray[upd_obj].tourist_file = tourist_file;

        setLocalStorageArray(DATA_STORE_NAME, touristArray)

        //updating grid
        var editTourist = gridBuscar.getStore().findRecord('id', seleccion.id);
        editTourist.set(touristArray[upd_obj])

    }

    venCargar.hide();
}



var funAbcEliminar = function(){
    var gridBuscar = Ext.getCmp('grids.abc.buscar'),
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

                touristArray = getLocalStorageArray(DATA_STORE_NAME);
                console.log(touristArray);
                touristArray.splice(index, 1);
                console.log(touristArray);
                setLocalStorageArray(DATA_STORE_NAME, touristArray);

                gridBuscar.getStore().removeAt(index);
            })
        }
    })
}