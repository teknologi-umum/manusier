package manusier

import (
	"strconv"
	"strings"
)

func Terbilang(n int64) string {
	var parts []string

	if n < 0 {
		parts = append(parts, "minus")
		n *= -1
	}

	triplets := splitPerThreeReverse(n)
	if len(triplets) == 0 || strings.Join(int64ToStr(triplets), "") == "0" {
		return ANGKA[0]
	}

	for i := len(triplets) - 1; i >= 0; i-- {
		var triplet int64 = triplets[i]

		if triplet == 0 {
			continue
		}

		hundreds := triplet / 100 % 10
		tens := triplet / 10 % 10
		units := triplet % 10

		if hundreds == 1 {
			parts = append(parts, "seratus")
		} else if hundreds > 0 {
			parts = append(parts, ANGKA[hundreds]+" ratus")
		}

		// Special case for 1000
		if triplet == 1 && i == 1 {
			parts = append(parts, "seribu")
			continue
		}

		if tens == 0 && units == 0 {
			mega := SATUAN_LONG[i+1]
			if mega != "" {
				if triplet == 100 {
					continue
				} else {
					parts = append(parts, mega)
				}
			}
			continue
		}

		switch tens {
		case 0:
			parts = append(parts, ANGKA[units])
		case 1:
			parts = append(parts, BELASAN[units])
		default:
			if units > 0 {
				parts = append(parts, PULUHAN[tens]+" "+ANGKA[units])
			} else {
				parts = append(parts, PULUHAN[tens])
			}
		}

		mega := SATUAN_RIBU[i]
		if mega != "" {
			parts = append(parts, mega)
		}
	}

	return strings.Join(parts, " ")

}

func splitPerThreeReverse(n int64) []int64 {
	triplets := []int64{}

	for n > 0 {
		triplets = append(triplets, n%1000)
		n = n / 1000
	}

	return triplets
}

func int64ToStr(arr []int64) []string {
	res := []string{}
	for _, v := range arr {
		iv := strconv.FormatInt(v, 10)
		res = append(res, iv)
	}
	return res
}
