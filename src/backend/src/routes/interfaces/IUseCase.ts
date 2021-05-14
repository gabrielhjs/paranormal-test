import { IDto } from "./IDto"


export interface IUseCase {
	execute(data: IDto): Promise<Object>
}