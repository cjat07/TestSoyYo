import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'

export default class EntitiesController {
  public async getEntities({request, response}: HttpContextContract) {
    const parameters = await this.convertToString(request.input("parameters"))
    const entities = []
    if(parameters.length == 0 || parameters == ""){
      return response.json({error:true, message:"no codes received"}) 
    }else{
      for (const value of parameters) {
        try {
          const getEntity = await axios.get("https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/"+value)
          if(getEntity.data.code == "F133"){
            entities.push({entityId:value, message:getEntity.data.message})
          }else{
            entities.push(getEntity.data.data)
          }     
        } catch (error) {
          return error
        }
      }
      return response.json(await this.sortJSON(entities, 'name')) 
    }

  }

  public async convertToString(values:any){
    const data = values.toString()
    return data.split(',')
  }

  public async sortJSON(data, key) {
    return await data.sort(function (data_1, data_2) {
        var clave_1 = data_1[key]
        var calve_2 = data_2[key];
      return ((clave_1 < calve_2) ? -1 : ((clave_1 > calve_2) ? 1 : 0));
    });
}
}
