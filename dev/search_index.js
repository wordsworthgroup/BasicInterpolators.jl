var documenterSearchIndex = {"docs":
[{"location":"spline/#Cubic-Spline-Interpolation","page":"Cubic Spline Interpolators","title":"Cubic Spline Interpolation","text":"","category":"section"},{"location":"spline/","page":"Cubic Spline Interpolators","title":"Cubic Spline Interpolators","text":"The types below implement piecewise cubic spline interpolation in one and two dimensions. Both types guarantee smoothness at the interpolation nodes. The CubicSplineInterpolator is a natural spline, with the second derivative set to zero at the boundaries, and it can be used with unevenly spaced points. The BicubicSplineInterpolator requires points to be evenly spaced in both dimensions and patches together cubic polynomials using finite-difference approximations of the surface's derivatives at the interpolation nodes.","category":"page"},{"location":"spline/","page":"Cubic Spline Interpolators","title":"Cubic Spline Interpolators","text":"","category":"page"},{"location":"spline/","page":"Cubic Spline Interpolators","title":"Cubic Spline Interpolators","text":"CubicSplineInterpolator\nBicubicSplineInterpolator","category":"page"},{"location":"spline/#BasicInterpolators.CubicSplineInterpolator","page":"Cubic Spline Interpolators","title":"BasicInterpolators.CubicSplineInterpolator","text":"CubicSplineInterpolator(x::AbstractVector{<:Real}, y::AbstractVector{<:Real})\n\nConstruct a CubicSplineInterpolator for the points in x and y. This is a natural spline, where the second derivative is set to zero at the boundaries.\n\n\n\n\n\nCubicSplineInterpolator(f::Function, xa::Real, xb::Real, n::Int)\n\nConstruct a CubicSplineInterpolator for the function f using n evenly spaced function evaluations in the range [xa,xb]\n\n\n\n\n\n","category":"type"},{"location":"spline/#BasicInterpolators.BicubicSplineInterpolator","page":"Cubic Spline Interpolators","title":"BasicInterpolators.BicubicSplineInterpolator","text":"BicubicSplineInterpolator(x::AbstractVector{<:Real},\n                          y::AbstractVector{<:Real},\n                          Z::AbstractArray{<:Real,2})\n\nConstruct a BicubicSplineInterpolator for the grid of points with axis 1 coordinates in x, axis 2 coordinates in y, and grid values in Z.\n\n\n\n\n\nBicubicSplineInterpolator(f::Function,\n                          xa::Real, xb::Real, nx::Int,\n                          ya::Real, yb::Real, ny::Int)\n\nConstruct a BicubicSplineInterpolator for the function f using a grid of nx points evenly spaced on the first axis in [xa,xb] and ny points evenly spaced on the second axis in [ya,yb].\n\n\n\n\n\n","category":"type"},{"location":"polynomial/#General-Polynomial-Interpolation-in-One-Dimension","page":"General Polynomial Interpolation","title":"General Polynomial Interpolation in One Dimension","text":"","category":"section"},{"location":"polynomial/","page":"General Polynomial Interpolation","title":"General Polynomial Interpolation","text":"For general polynomial interpolation in one dimension, BasicInterpolators provides a few implementations of Neville's Algorithm.","category":"page"},{"location":"polynomial/","page":"General Polynomial Interpolation","title":"General Polynomial Interpolation","text":"For quadratic interpolation of any three points, use the quadratic function.\nFor cubic interpolation of any four points, use the cubic function.\nFor nth order polynomial interpolation of arbitrary points, the neville function is available.","category":"page"},{"location":"polynomial/","page":"General Polynomial Interpolation","title":"General Polynomial Interpolation","text":"All three functions use the same basic algorithm, but the quadratic and cubic versions are written out explicitly for those cases and will be faster than the general neville function.","category":"page"},{"location":"polynomial/","page":"General Polynomial Interpolation","title":"General Polynomial Interpolation","text":"","category":"page"},{"location":"polynomial/","page":"General Polynomial Interpolation","title":"General Polynomial Interpolation","text":"quadratic\ncubic\nneville","category":"page"},{"location":"polynomial/#BasicInterpolators.quadratic","page":"General Polynomial Interpolation","title":"BasicInterpolators.quadratic","text":"quadratic(x::Real, xp::AbstractVector{<:Real}, yp::AbstractVector{<:Real})\n\nPerform quadratic polynomial interpolation of xp and yp at the point x, using Neville's algorithm. xp and yp must both contain three points.\n\n\n\n\n\n","category":"function"},{"location":"polynomial/#BasicInterpolators.cubic","page":"General Polynomial Interpolation","title":"BasicInterpolators.cubic","text":"cubic(x::Real, xp::AbstractVector{<:Real}, yp::AbstractVector{<:Real})\n\nPerform cubic polynomial interpolation of xp and yp at the point x, using Neville's algorithm. xp and yp must both contain four points.\n\n\n\n\n\n","category":"function"},{"location":"polynomial/#BasicInterpolators.neville","page":"General Polynomial Interpolation","title":"BasicInterpolators.neville","text":"neville(x::Real, xp::AbstractVector{<:Real}, yp::AbstractVector{<:Real})\n\nPerform polynomial interpolation of xp and yp at the point x, using Neville's algorithm with as many points as are provided. xp and yp must have the same length. With only 3 or 4 points (quadratic or cubic polynomial interpolation) the quadratic and cubic functions will be faster.\n\n\n\n\n\n","category":"function"},{"location":"cubic/#Cubic-Interpolation","page":"Cubic Interpolators","title":"Cubic Interpolation","text":"","category":"section"},{"location":"cubic/","page":"Cubic Interpolators","title":"Cubic Interpolators","text":"The types below implement piecewise cubic interpolation in one and two dimensions. These are not typical cubic splines, which are also implemented in this package. The CubicInterpolator and BicubicInterpolator do not guarantee smoothness at the interpolation nodes. However, they can be used with unevenly spaced grids and perform well when interpolating smooth curves/surfaces. For cubic splines, look here.","category":"page"},{"location":"cubic/","page":"Cubic Interpolators","title":"Cubic Interpolators","text":"","category":"page"},{"location":"cubic/","page":"Cubic Interpolators","title":"Cubic Interpolators","text":"CubicInterpolator\nBicubicInterpolator","category":"page"},{"location":"cubic/#BasicInterpolators.CubicInterpolator","page":"Cubic Interpolators","title":"BasicInterpolators.CubicInterpolator","text":"CubicInterpolator(x::AbstractVector{<:Real}, y::AbstractVector{<:Real})\n\nConstruct a CubicInterpolator for the points in x and y\n\n\n\n\n\nCubicInterpolator(f::Function, xa::Real, xb::Real, n::Int)\n\nConstruct a CubicInterpolator for the function f using n evenly spaced function evaluations in the range [xa,xb]\n\n\n\n\n\n","category":"type"},{"location":"cubic/#BasicInterpolators.BicubicInterpolator","page":"Cubic Interpolators","title":"BasicInterpolators.BicubicInterpolator","text":"BicubicInterpolator(x::AbstractVector{<:Real},\n                    y::AbstractVector{<:Real},\n                    Z::AbstractArray{<:Real,2})\n\nConstruct a BicubicInterpolator for the grid of points with axis 1 coordinates in x, axis 2 coordinates in y, and grid values in Z.\n\n\n\n\n\nBicubicInterpolator(f::Function,\n                    xa::Real, xb::Real, nx::Int,\n                    ya::Real, yb::Real, ny::Int)\n\nConstruct a BicubicInterpolator for the function f using a grid of nx points evenly spaced on the first axis in [xa,xb] and ny points evenly spaced on the second axis in [ya,yb].\n\n\n\n\n\n","category":"type"},{"location":"linear/#Linear-Interpolation","page":"Linear Interpolators","title":"Linear Interpolation","text":"","category":"section"},{"location":"linear/","page":"Linear Interpolators","title":"Linear Interpolators","text":"Simple linear interpolation in one and two dimensions. In both cases, unevenly spaced grids are fine.","category":"page"},{"location":"linear/","page":"Linear Interpolators","title":"Linear Interpolators","text":"","category":"page"},{"location":"linear/","page":"Linear Interpolators","title":"Linear Interpolators","text":"LinearInterpolator\nBilinearInterpolator","category":"page"},{"location":"linear/#BasicInterpolators.LinearInterpolator","page":"Linear Interpolators","title":"BasicInterpolators.LinearInterpolator","text":"LinearInterpolator(x::AbstractVector{<:Real}, y::AbstractVector{<:Real})\n\nConstruct a LinearInterpolator for the points in x and y\n\n\n\n\n\nLinearInterpolator(f::Function, xa::Real, xb::Real, n::Int)\n\nConstruct a LinearInterpolator for the function f using n evenly spaced function evaluations in the range [xa,xb]\n\n\n\n\n\n","category":"type"},{"location":"linear/#BasicInterpolators.BilinearInterpolator","page":"Linear Interpolators","title":"BasicInterpolators.BilinearInterpolator","text":"BilinearInterpolator(x::AbstractVector{<:Real},\n                     y::AbstractVector{<:Real},\n                     Z::AbstractArray{<:Real,2})\n\nConstruct a BilinearInterpolator for the grid of points with axis 1 coordinates in x, axis 2 coordinates in y, and grid values in Z.\n\n\n\n\n\nBilinearInterpolator(f::Function,\n                     xa::Real, xb::Real, nx::Int,\n                     ya::Real, yb::Real, ny::Int)\n\nConstruct a BilinearInterpolator for the function f using a grid of nx points evenly spaced on the first axis in [xa,xb] and ny points evenly spaced on the second axis in [ya,yb].\n\n\n\n\n\n","category":"type"},{"location":"chebyshev/#Chebyshev-Interpolation","page":"Chebyshev Interpolators","title":"Chebyshev Interpolation","text":"","category":"section"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"Chebyshev interpolation is an extremely accurate method for interpolating smooth functions.  However, the extremely high accuracy is achieved by careful placement of the interpolation nodes at the Chebyshev nodes. Chebyshev interpolation is a good way to approximate a smooth function that is very expensive to evaluate. By evaluating the function at the Chebyshev nodes, which are given by the chebygrid function, highly accurate and efficient interpolators can be generated to speed things up. This is the only part of BasicInterpolators that is not really so basic, but chebyshev interpolation is a powerful tool in the right context and it's worth providing easy access to it.","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"To create a ChebyshevInterpolator or BichebyshevInterpolator, it is probably easiest to pass a function to the constructor, which will evaluate the function at the Chebyshev nodes and generate interpolating coefficients. For example, for two-dimensional interpolation of f(xy) = sin(x) + cos(y) with xy  -33","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"using BasicInterpolators: BichebyshevInterpolator\nf(x,y) = sin(x) + cos(y)\nP = BichebyshevInterpolator(f, -3, 3, 16, -3, 3, 16);\nP(1, 2) - f(1, 2)","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"With 16 points in each dimension, the error is already about one part per trillion. This is a contrived example and the incredible accuracy of Chebyshev interpolation can be demonstrated more thoroughly, but the important fact is that Chebyshev approximations to smooth functions have exponential, or \"infinite order\" convergence. As soon as there are enough points for the Chebyshev approximation to capture the function's basic shape, the error will plummet to machine precision as more points are added. For more on this and related topics, I recommend the following book","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"Boyd, John P. Chebyshev and Fourier spectral methods. Courier Corporation, 2001.","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"warning: Warning\nThe Chebyshev interpolators are not thread-safe. They compute cosine expansions and, in the 2D case, do some linear algebra in-place using arrays stored with the objects. A single chebyshev interpolator should never be called by multiple threads at once.","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"As the warning above indicates, the Chebyshev interpolators do some things in the background that the other interpolators don't. I put some effort into making them fast (at least once constructed) by avoiding as many direct cos evaluations as possible and doing the unavoidable calculations in-place using fast linear algebra functions (mul!). I think the speed of the Chebyshev interpolators here should compare well with any other implementations, but they should be considerably easier to use.","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"","category":"page"},{"location":"chebyshev/","page":"Chebyshev Interpolators","title":"Chebyshev Interpolators","text":"chebygrid\nChebyshevInterpolator\nBichebyshevInterpolator","category":"page"},{"location":"chebyshev/#BasicInterpolators.chebygrid","page":"Chebyshev Interpolators","title":"BasicInterpolators.chebygrid","text":"chebygrid(n::Int)\n\nCreate an array of n chebyshev nodes in [-1,1]\n\n\n\n\n\nchebygrid(xa::Real, xb::Real, n::Int)\n\nCreate an array of n chebyshev nodes in [xa,xb]\n\n\n\n\n\nchebygrid(xa::Real, xb::Real, nx::Int, ya::Real, yb::Real, ny::Int\n\nCreate a two-dimensional grid of chebyshev nodes using nx points along the first axis, in [xa,xb], and ny points along the second axis, in [ya,yb].\n\n\n\n\n\n","category":"function"},{"location":"chebyshev/#BasicInterpolators.ChebyshevInterpolator","page":"Chebyshev Interpolators","title":"BasicInterpolators.ChebyshevInterpolator","text":"ChebyshevInterpolator(x::AbstractVector{<:Real}, y::AbstractVector{<:Real})\n\nConstruct a ChebyshevInterpolator for the points in x and y. The x coordinates must be arranged on a chebyshev grid, which can be generated using the chebygrid function.\n\n\n\n\n\nChebyshevInterpolator(f::Function, xa::Real, xb::Real, n::Int)\n\nConstruct a ChebyshevInterpolator for the function f using n function evaluations in the range [xa,xb]. The function evaluations will occur on the chebyshev nodes.\n\n\n\n\n\n","category":"type"},{"location":"chebyshev/#BasicInterpolators.BichebyshevInterpolator","page":"Chebyshev Interpolators","title":"BasicInterpolators.BichebyshevInterpolator","text":"BichebyshevInterpolator(x::AbstractVector{<:Real},\n                        y::AbstractVector{<:Real},\n                        Z::AbstractArray{<:Real,2})\n\nConstruct a BichebyshevInterpolator for the grid of points with axis 1 coordinates in x, axis 2 coordinates in y, and grid values in Z. The given points must lie on a chebyshev grid in each direction. These can be generated with the chebygrid function or the interpolator can be constructed directly from a function using the method below.\n\n\n\n\n\nBichebyshevInterpolator(f::Function,\n                        xa::Real, xb::Real, nx::Int,\n                        ya::Real, yb::Real, ny::Int)\n\nConstruct a BichebyshevInterpolator for the function f using a grid of nx points on the first axis in [xa,xb] and ny points on the second axis in [ya,yb].\n\n\n\n\n\n","category":"type"},{"location":"#BasicInterpolators.jl","page":"Home","title":"BasicInterpolators.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Welcome to the BasicInterpolators documentation. This package provides some basic and useful interpolation algorithms. Quick facts about the functionality:","category":"page"},{"location":"","page":"Home","title":"Home","text":"All types and functions assume the use of real numbers and will return double precision (Float64) numbers.\nThere are four different interpolation methods, each implemented in one and two dimensions.\nThe two-dimensional interpolation methods operate regular grids.\nAttempts to extrapolate can be set to throw an error or blindly use whatever curve/surface defines the nearest boundary cell.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Other-Packages","page":"Home","title":"Other Packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you need n-dimensional interpolation, irregular grids, complex numbers, or built-in treatment of different boundary behaviors, this package will not help you. But a lot of applications don't require those features and I hope this package will be useful and fast for basic applications. If you do need other features, however, please have a look at more ambitious packages,","category":"page"},{"location":"","page":"Home","title":"Home","text":"Interpolations.jl\nDierckx.jl\nGridInterpolations.jl\nApproXD","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Details","page":"Home","title":"Details","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For an overview of how the package works, see the how-to section below. For more information on the specific types and methods available, follow these links:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Linear Interpolators\nCubic Interpolators\nCubic Spline Interpolators\nChebyshev Interpolators\nGeneral 1D Polynomial Interpolation","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#How-to-Start-Interpolating-Stuff","page":"Home","title":"How to Start Interpolating Stuff","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BasicInterpolators offers callable types, or function-like objects, for your interpolation needs. This simply means that you construct an Interpolator object, like a LinearInterpolator or a BicubicInterpolator, then call it like a function, passing it the interpolation coordinate.","category":"page"},{"location":"#Construct-from-points","page":"Home","title":"Construct from points","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For example, to do linear interpolation on a range of three points, we construct a LinearInterpolator then call it on the interpolation coordinate:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using BasicInterpolators: LinearInterpolator\nx = [0, 1, 2];\ny = [0, 0.5, 1];\np = LinearInterpolator(x, y);\np(0.5)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pretty basic! Each of the types can be constructed by passing vectors/arrays with the points to interpolate. A nice result of this syntax is easy broadcasting. To interpolate a bunch of values in some array x, we simply call p.(x).","category":"page"},{"location":"#Construct-from-a-function","page":"Home","title":"Construct from a function","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"All the interpolators can also be constructed with a function to sample from. For example, to generate a ChebyshevInterpolator of the function f(x) = sin(2x) + x^2exp(x), in the range -30, using 16 points:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using BasicInterpolators: ChebyshevInterpolator\nf(x) = sin(2x) + x^2*exp(x);\np = ChebyshevInterpolator(f, -3, 0, 16);\nf(-1.5)\np(-1.5)","category":"page"},{"location":"","page":"Home","title":"Home","text":"In the background, the constructor generates 16 points between -3 and 0, evaluates the function at those points, then sets up everything it needs to interpolate in that range.","category":"page"},{"location":"#Two-dimensional-interpolation","page":"Home","title":"Two-dimensional interpolation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The two-dimensional interpolators work the same way, but with another dimension (of course). You can supply the coordinates along each axis and a grid of points or you can supply a function along with where to evaluate it and how many points to use. For example, to make a BilinearInterpolator for a 10 by 10 grid of randomly spaced points:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using BasicInterpolators: BilinearInterpolator\nx = sort(rand(10));\ny = sort(rand(10));\nA = rand(10,10);\nP = BilinearInterpolator(x, y, A);\nP(0.5, 0.5)","category":"page"},{"location":"#Grid-spacing","page":"Home","title":"Grid spacing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Unevenly spaced grids are acceptable for everything but the chebyshev interpolators and the bivariate spline, but you have to supply the coordinates directly instead of constructing with a function. When you do construct with a function, all the interpolators use evenly spaced points except for the chebyshev interpolators. The chebyshevs are a special case requiring a very specific grid spacing but they reward you with shockingly high accuracy as the number of points increases.","category":"page"},{"location":"#Boundaries","page":"Home","title":"Boundaries","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The chebyshev interpolators won't let you extrapolate, or pass a point outside the stated interpolation range, because they are undefined outside the boundaries. All the other ones will let you extrapolate if you turn off the boundary check, which is an optional argument whenever you call an interpolator. For example,","category":"page"},{"location":"","page":"Home","title":"Home","text":"using BasicInterpolators: CubicSplineInterpolator\nx = [0, 1, 2];\ny = rand(3);\np = CubicSplineInterpolator(x, y);\n#trying to extrapolate will normally cause an error\np(-1)\n#but you can override the boundary check by passing `false`\np(-1, false)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Extrapolation blindly uses the interpolating curve/surface of the nearest boundary cell in the grid, so it can easily return wild values, especially for the cubic interpolators. That's why it's not allowed by default. The same goes for two-dimensional interpolators. You can turn off the boundary check by passing false after the interpolation coordiantes, as in P(x, y, false). In these cases, the false argument means \"don't check the boundaries.\"","category":"page"},{"location":"#Methods","page":"Home","title":"Methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Linear Interpolation\nCubic Interpolation\nCubic Spline Interpolation\nChebyshev Interpolation\nGeneral Polynomial Interpolation in 1D","category":"page"}]
}