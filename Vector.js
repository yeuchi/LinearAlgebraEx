/*
 * Module:      Vector
 *
 * Description: a Vector
 */


class Vector {

    constructor(pointStart, pointEnd)
    {
        this._pStart = pointStart;
        this._pEnd = pointEnd;
    }

    get X() {
        return this._pEnd.x - this._pStart.x
    }

    get Y() {
        return this._pEnd.y - this._pStart.y
    }

    get Z() {
        return this._pEnd.z - this._pStart.z
    }

    get pointStart()
    {
        return this._pStart;
    }

    get pointEnd()
    {
        return this._pEnd;
    }

    /** 
     * Dot product - find angle between 2 vectors
     * https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/core-mathematics/vectors/dot-product.html#:~:text=To%20find%20the%20angle%20between,%7C%7Cb%7Ccos%CE%B8.
     */
    findDotProduct(vector)
    {
        /*
         * TODO Something is wrong here..
         */
        var numerator = vector.X * vector.Y + this.X * this.Y
        var denom_a = Math.sqrt(vector.X * vector.X + vector.Y * vector.Y)
        var denom_b = Math.sqrt(this.X * this.X + this.Y * this.Y)
        var result = numerator/(denom_a*denom_b)
        var radian = Math.acos(result)
        return radian * 180 / Math.PI
    }

    /**
     * Cross product - find vector perpendicular to 2 vectors - normal
     * The cross product gives a vector which is perpendicular to both vectors
     * https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/core-mathematics/vectors/cross-product.html
     */
    findCrossProduct(vector)
    {
        var x = vector.Y * this.Z - vector.Z * this.Y;
        var y = vector.Z * this.X - vector.X * this.Z;
        var z = vector.X * this.Y - vector.Y * this.X;
        return Vector(Point(x,y,z), Point(0,0,0));
    }
}
