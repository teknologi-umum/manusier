package manusier

import (
	"math"
	"strconv"
	"strings"
)

// Formats a given int64 to a rupiah formatted string. Does not support decimals.
//
//      import (
//        log
//        manusier "github.com/teknologi-umum/manusier/go"
//      )
//
//      func main() {
//        f := manusier.FormatRupiah(500000)
//        log.Println(f) // Rp 50.000
//      }
func FormatRupiah(n int64, level ...int) string {
	t := numberToDottedString(n)

	if len(level) == 0 || level[0] == 0 {
		return minusParen(n, 0) + "Rp " + t + minusParen(n, 1)
	}

	s := strings.Split(t, ".")
	v := s[0 : len(s)-level[0]]
	return minusParen(n, 0) + "Rp " + strings.Join(v, ".") + " " + SATUAN_LONG[level[0]+1] + minusParen(n, 1)
}

func numberToDottedString(n int64) string {
	return strings.Join(splitPerThree(strconv.FormatInt(int64(math.Abs(float64(n))), 10)), ".")
}

func splitPerThree(str string) []string {
	var temp []string

	// Cleanup first iteration
	m := len(str) % 3
	if m == 2 {
		temp = append(temp, str[0:2])
		str = str[2:]
	} else if m == 1 {
		temp = append(temp, str[0:1])
		str = str[1:]
	}

	for i := 0; i < len(str); i += 3 {
		temp = append(temp, str[i:i+3])
	}
	return temp
}

func minusParen(n int64, position int) string {
	if n < 0 {
		if position == 0 {
			return "("
		}
		return ")"
	}
	return ""
}
