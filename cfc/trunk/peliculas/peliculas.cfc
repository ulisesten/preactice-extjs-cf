<cfcomponent>
    <cffunction name="peliculasBuscar" access="remote" returntype="struct">
        <cfset apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=325b090f323374b186299125326c4c79&language=es-MX&page=1'>

        <cfhttp url="#apiUrl#" method="get" result="resultado" timeout="120">
            <cfhttpparam type="header" name="Content-Type" value= "application/json">
        </cfhttp>

        <cfif isDefined('resultado.Responseheader') and resultado.Responseheader.Status_Code eq 200 and len(resultado.FileContent) gt 0>

            <cfset data=deserializeJSON(resultado.FileContent)>
            <cfif isDefined('title') and len(title) gt 0>
                <cfscript>
                    data.results = arrayFilter(data.results, function(item) {
                        return item.title == title
                    })
                </cfscript>
            </cfif>

            <cfif isDefined('id') and len(id) gt 0>
                <cfscript>
                    data.results = arrayFilter(data.results, function(item){
                        return item.id == id
                    })
                </cfscript>
            </cfif>

            <cfset structReturn = { CONSULTA = data.results, NUMREGISTROS = arrayLen(data.results) }>

        <cfelse>

            <cfset structReturn={CONSULTA = structNew(), NUMREGISTROS = 0}>

        </cfif>

        <cfreturn structReturn>
    </cffunction>

</cfcomponent>