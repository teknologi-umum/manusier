package manusier

type DiskonType int

const (
	PersenDariX DiskonType = iota
	MinimumPembelianX
	MinXMaxY
)

// Gives discount for the given int64 argument in n with a certain unit (from supplied const enum).
// There are three ways to use this function:
//
//       import (
//         log
//         manusier "github.com/teknologi-umum/manusier/go"
//       )
//
//       func main() {
//         p := manusier.Diskon(50000, manusier.PersenDariX, 10)
//         log.Println(p) // 45000
//
//         m := manusier.Diskon(50000, manusier.MinimumPembelianX, 5000, 1, 5)
//         log.Println(p) // 45000
//
//         n := manusier.Diskon(50000, manusier.MinXMaxY, 5000, 5, 20, 10)
//         log.Println(n) // 45000
//       }
func Diskon(n int64, unit DiskonType, amount int64, xyz ...int) int64 {
	switch unit {
	case PersenDariX:
		return int64(float64(n) - (float64(n) * (float64(amount) / 100)))
	case MinimumPembelianX:
		y := xyz[1]
		x := xyz[0]
		if y >= x {
			return n - amount
		}
		return n
	case MinXMaxY:
		z := xyz[2]
		y := xyz[1]
		x := xyz[0]
		if z >= x && z <= y {
			return n - amount
		}
		return n
	default:
		panic("argumen unit yang diberikan tidak valid")
	}
}
