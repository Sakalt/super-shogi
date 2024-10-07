import {Setting} from '../setting';
import {Piece} from './piece';

export class Silvergold extends Piece{
  constructor(_turn: boolean, _piece_num: number=15){
    super(Setting.PIECES[_piece_num], _turn, _piece_num);
  }
}
