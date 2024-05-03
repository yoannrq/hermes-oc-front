// Importation des hooks createContext et useContext de React
import { createContext, useContext } from 'react';

// Définition du type pour le contexte, spécifiant les fonctions disponibles dans le cache
type ContextType = {
  keyify: (key: Array<unknown>) => string; // Fonction pour convertir un tableau de clés en une chaîne de caractères unique
  getCache: (key: string, defaultValue?: any, ttl?: number) => any; // Fonction pour obtenir une valeur du cache avec une clé spécifique, une valeur par défaut et un temps de vie (ttl)
  setCache: (key: string, value: any, ttl?: number) => void; // Fonction pour définir une valeur dans le cache avec une clé, une valeur et un ttl
  clearCache: () => void; // Fonction pour effacer toutes les données du cache
  deleteCache: (key: string) => void; // Fonction pour supprimer une entrée spécifique du cache en utilisant sa clé
};

// Création du contexte CacheContext avec un type spécifique et une valeur initiale null
export const CacheContext = createContext<ContextType | null>(null);

// Hook personnalisé useCache pour faciliter l'accès au contexte CacheContext
export function useCache() {
  // Utilisation du hook useContext pour accéder au contexte CacheContext
  // La conversion 'as ContextType' assure que la valeur retournée est traitée comme ContextType
  return useContext(CacheContext) as ContextType;
}
