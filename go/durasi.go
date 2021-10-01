package manusier

import (
	"errors"
	"math"
	"strconv"
	"strings"
	"time"
)

const (
	SECOND int64 = 1000
	MINUTE int64 = 1000 * 60
	HOUR   int64 = 1000 * 60 * 60
	DAY    int64 = 1000 * 60 * 60 * 24
	YEAR   int64 = 1000 * 60 * 60 * 24 * 365
)

var ErrDurasiSejak = errors.New("argumen pertama hanya boleh memiliki Date sebelum waktu sekarang")
var ErrDurasiMenuju = errors.New("argumen pertama hanya boleh memiliki Date setelah waktu sekarang")

func DurasiSejak(d time.Time) (string, error) {
	if d.UnixMilli()-time.Now().UnixMilli() < 0 {
		return "", ErrDurasiSejak
	}

	return durasi(d), nil
}

func DurasiMenuju(d time.Time) (string, error) {
	if d.UnixMilli()-time.Now().UnixMilli() > 0 {
		return "", ErrDurasiMenuju
	}

	return durasi(d), nil
}

func durasi(d time.Time) string {
	var a int64 = d.UnixMilli()
	var b int64 = time.Now().UnixMilli()
	var diff int64 = int64(math.Abs(float64(a - b)))

	if diff > YEAR {
		return isFuture(strings.Replace(RELASI_DURASI["y"], "{?}", strconv.FormatInt(diff/YEAR, 10), 1), a, b)
	}

	if diff > DAY {
		return isFuture(strings.Replace(RELASI_DURASI["d"], "{?}", strconv.FormatInt(diff/DAY, 10), 1), a, b)
	}

	if diff > HOUR {
		return isFuture(strings.Replace(RELASI_DURASI["h"], "{?}", strconv.FormatInt(diff/HOUR, 10), 1), a, b)
	}

	if diff > MINUTE {
		return isFuture(strings.Replace(RELASI_DURASI["m"], "{?}", strconv.FormatInt(diff/MINUTE, 10), 1), a, b)
	}

	if diff > SECOND {
		return isFuture(strings.Replace(RELASI_DURASI["s"], "{?}", strconv.FormatInt(diff/SECOND, 10), 1), a, b)
	}

	return isFuture(strings.Replace(RELASI_DURASI["x"], "{?}", strconv.FormatInt(diff, 10), 1), a, b)

}

func isFuture(s string, a int64, b int64) string {
	if b-a > 0 {
		return strings.Replace(RELASI_DURASI["future"], "{?}", s, 1)
	}

	return strings.Replace(RELASI_DURASI["past"], "{?}", s, 1)
}
