import {Pipe,PipeTransform} from "@angular/core";
import {Asset} from "./asset";


@Pipe({
    name:"assetTotal"
})

export class AssetTotalPipe implements PipeTransform{
  
    transform(assets:Asset[]):number {
        let x:number=0;
        assets.forEach((asset:Asset) => {
            x=x+asset.monetoryValue;
        });
        return x;
     }


}
