
class Point
{
    constructor(x, y, z)
    {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    
    distanceFromPoint(point)
    {
        return this.distanceFrom(point.x, point.y, point.z);
    }
    
    distanceFrom(x,y, z)
    {
        var xx = this._x - x;
        xx = xx * xx;
        
        var yy = this._y - y;
        yy = yy * yy;

        var zz = this._z - z;
        zz = zz * zz;
        
        return Math.sqrt(xx+yy+zz);
    }
    
    get x()
    {
       return this._x; 
    }
    
    get y()
    {
        return this._y;
    }

    get z() 
    {
        return this._z;
    }
    
    set x(x)
    {
        this._x = x;
    }
    
    set y(y)
    {
        this._y = y;
    }

    set z(z)
    {
        this._z = z;
    }
}
