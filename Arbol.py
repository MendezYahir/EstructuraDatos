class Nodo:
    def __init__(self, valor):
        self.izquierda = None
        self.derecha = None
        self.valor = valor

class ArbolBinario:
    def __init__(self):
        self.raiz = None

    
    def insertar(self, valor):
        if self.raiz is None:
            self.raiz = Nodo(valor)
        else:
            self._insertar_recursivo(self.raiz, valor)

    def _insertar_recursivo(self, nodo_actual, valor):
        if valor < nodo_actual.valor:
            if nodo_actual.izquierda is None:
                nodo_actual.izquierda = Nodo(valor)
            else:
                self._insertar_recursivo(nodo_actual.izquierda, valor)
        else:
            if nodo_actual.derecha is None:
                nodo_actual.derecha = Nodo(valor)
            else:
                self._insertar_recursivo(nodo_actual.derecha, valor)

    def preorden(self, nodo):
        if nodo:
            print(nodo.valor, end=" ")
            self.preorden(nodo.izquierda)
            self.preorden(nodo.derecha)


if __name__ == "__main__":
    arbol = ArbolBinario()

    arbol.insertar('Z')

    elementos = ['A', 'S', 'S', 'T', 'Y', 'U', 'P', 'L', 'Q', 'M']  

    for elemento in elementos:
        arbol.insertar(elemento)

    print("Recorrido Preorden:")
    arbol.preorden(arbol.raiz)
