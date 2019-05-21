module.exports = function main(a) {
    var up_LCD = ["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
    var middle_LCD = ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
    var down_LCD = ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
    
    var out_up = ""
    var out_middle = ""
    var out_down = ""

    for(var i =0;i<a.length;i++)
    {
        out_up += up_LCD[parseInt(a[i])]+" ";
        out_middle += middle_LCD[parseInt(a[i])]+" ";
        out_down += down_LCD[parseInt(a[i])]+" "
    }
    out_up[-1]="\n"
    out_middle[-1]="\n"
    out_down[-1]="\n"

    return out_up+out_middle+out_down
};
