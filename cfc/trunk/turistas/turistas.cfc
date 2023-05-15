<cfcomponent>
    <cffunction name="turistasBuscar" access="remote" returntype="struct">
        <cfset apiUrl='http://restapi.adequateshop.com/api/Tourist?page=1'>

        <cfhttp url="#apiUrl#" method="get" result="resultado" timeout="120">
            <cfhttpparam type="header" name="Content-Type" value= "application/json">
        </cfhttp>

        <cfif isDefined('resultado.Responseheader') and resultado.Responseheader.Status_Code eq 200 and len(resultado.FileContent) gt 0>

            <cfset data = deserializeJSON(resultado.Filecontent)>
            <cfif isDefined('tourist_name') and len(tourist_name) gt 0>
                <cfscript>
                    data.data = arrayFilter(data.data, function(item){
                        return item.tourist_name == tourist_name
                    })
                </cfscript>
            </cfif>

            <cfif isDefined('id') and len(id) gt 0>
                <cfscript>
                    data.data = arrayFilter(data.data, function(item){
                        return item.id == id
                    })
                </cfscript>
            </cfif>

            <cfset structReturn = {CONSULTA = data.data, NUMREGISTROS = arrayLen(data.data)}>

        <cfelse>
            <cfset structReturn = {CONSULTA = structNew(), NUMREGISTROS = 0}>
        </cfif>

        <cfreturn structReturn>
        
    </cffunction>

    
</cfcomponent>