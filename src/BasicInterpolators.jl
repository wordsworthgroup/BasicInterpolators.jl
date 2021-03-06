module BasicInterpolators

#for in-place matrix multiplication in chebyshev interpolators
using LinearAlgebra: mul!, dot

include("base.jl")
include("polynomial.jl")
include("spline.jl")
include("chebyshev.jl")
include("scattered.jl")

end
