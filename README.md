Tab TSP (client)
==========

Tab.doに登録されている「Tab」を指定し、それらのItemを最も効率良く回るためのルートを提案する.

node.js(0.8.2)+express(3.0.0beta6)+ajaxで構成されているが、サーバ側はAJAXのクロスサイト問題を解決するためにtab.doとブラウザ間をPorxyしているに過ぎない.

クライアント側で複数Itemの巡回セールスマン問題を解くために、[google-maps-tsp-solver](http://code.google.com/p/google-maps-tsp-solver/)を用いている.

License
-------
Copyright(C) 2012 Nobuyuki Matsui (nobuyuki.matsui@gmail.com)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
