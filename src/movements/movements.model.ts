export class Movement {
    constructor(
        public id: number = null,
        public description: string = "",
        public amount:number = 1,
        public movement_type_id: number = 1,
        public debt_id:number = null, 
        public date:string,
    ) {}
}
